#!/usr/bin/env python3
##
import xlrd
import operator as op
import pandas as pd
import yaml
schemas = yaml.load(open('parse_schema.yaml', 'r'))


##
def get_schema(topic, name):
    schema = schemas[topic][name].copy()
    schema['header_rows'] = [x-1 for x in schema['header_rows']]
    schema['idx_cols'] = [x-1 for x in schema['idx_cols']]
    schema['data_col'] = schema['data_col'] - 1
    schema['data_row'] = schema['data_row'] - 1
    return schema


##
def proc_sheet(sht, **kw):
    # Get sheet data
    df = []
    for x in sht.get_rows():
        df.append(map(op.attrgetter('value'), x))
    df = pd.DataFrame(df)

    n_row, n_col = df.shape
    data_rows = range(kw['data_row'], n_row)
    data_cols = range(kw['data_col'], n_col)

    #
    # Get header
    header = df.loc[
        kw['header_rows'],
        data_cols].copy()
    for c in header.columns:
        header[c] = (
            header[c]
            .str.replace(' ', '')
            .str.replace('\n', '')
        )
        if (c + 1) in header.columns:
            if (header.iloc[0][[c, c+1]] == '').sum() == 0:
                c_fix = ''.join(header.iloc[0][[c, c+1]].values)
                header.iloc[0][c] = c_fix
                header.iloc[0][c+1] = ''

    header = header[header != ''].T.fillna(method='pad').T
    header = header.values.tolist()

    #
    # Get index
    idx = df.iloc[data_rows, kw['idx_cols']].values.T.tolist()

    #
    # Get processed data
    data = df.iloc[data_rows, data_cols]
    data.columns = header
    data.columns.names = kw['header_names']
    data.index = idx
    data.index.names = kw['idx_names']

    # Truncate tail
    ikeep = ((data == '').sum(axis=1) < 2)
    data = data.loc[ikeep]

    col_level = list(range(len(data.columns.levels)-1))
    data = data.stack(col_level).reset_index()
    # data = data.loc[data['犯罪原因'] != '總計']
    return data


##
