export const mapArabicToRomanNumbers = new Map<string, string>([
  ['1', 'I'],
  ['2', 'II'],
  ['3', 'III'],
  ['4', 'IV'],
  ['5', 'V'],
  ['6', 'VI'],
  ['7', 'VII'],
  ['8', 'VIII'],
  ['9', 'IX'],
  ['10', 'X'],
  ['11', 'XI'],
  ['12', 'XII'],
]);

export const mapMatchesToIndexes = new Map<string, string>([
  ['1', '5 Numbers + 2 Euronumbers'],
  ['2', '5 Numbers + 1 Euronumber'],
  ['3', '5 Numbers + 0 Euronumbers'],
  ['4', '4 Numbers + 2 Euronumbers'],
  ['5', '4 Numbers + 1 Euronumber'],
  ['6', '4 Numbers + 0 Euronumber'],
  ['7', '3 Numbers + 2 Euronumbers'],
  ['8', '2 Numbers + 2 Euronumbers'],
  ['9', '3 Numbers + 1 Euronumber'],
  ['10', '3 Numbers + 0 Euronumbers'],
  ['11', '1 Number + 2 Euronumbers'],
  ['12', '2 Numbers + 1 Euronumber'],
]);


export const formatNumber = (arg: number): string => {
  return new Intl.NumberFormat('en-US').format(arg);
};

export const formatCurrency = (arg: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
  }).format(arg / 100);
};

export interface Odd {
  winners: number;
  specialPrize: number;
  prize: number;
}

export const sortOddsByPrize = (odds: Odd[]) => {
  return odds.sort(function (a, b) {
    if (a.prize > b.prize) {
      return 1;
    }
    if (a.prize < b.prize) {
      return -1;
    }
    return 0;
  }).reverse();
}

export interface JackpotData {
  last: {
    nr: number;
    date: {
      full: string;
    };
    numbers: number[];
    euroNumbers: number[];
    odds: Odd[];
    closingDate: string;
    lateClosingDate: string;
    drawingDate: string;
  };
  next: {};
}


export const getClosingDate = (data: JackpotData): string => {
  return data.last.closingDate.split(',')[0];
}