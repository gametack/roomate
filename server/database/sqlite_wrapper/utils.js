// Open Source Initiative OSI - The MIT License (MIT):Licensing
//
// The MIT License (MIT)
// Copyright (c) 2012 Joffrey Fuhrer (f.joffrey@gmail.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

function dissect(obj) {
    var res = {
        columns : [],
        values : [],
        valuesPlaceholder : '('
    }, first = true;
    for (var i in obj) {
        res.columns.push(i);
        res.values.push(obj[i]);
        res.valuesPlaceholder += (first ? (first = false, '?') : ',?');
    }
    res.valuesPlaceholder += ')';
    return res;
}

function cols(columns) {
    if (Array.isArray(columns)) {
        return columns.join(',');
    }

    var res = '';
    var first = true;
    for (var col in columns) {
        res += (first ? (first = false, '') : ',') + col + 
            (columns[col] ? ' AS ' + columns[col] : '');
    }
    return res;
}

function repeat(seq, sep, n) {
    if (n == 0)
        return '';

    var res = '';
    while (n > 1) {
        if (n % 2 == 1) {
            res += sep + seq;
            n--;
        }
        seq += sep + seq;
        n /= 2;
    }
    return seq + res;
}

module.exports = {
    dissect: dissect,
    cols: cols,
    repeat: repeat
};
