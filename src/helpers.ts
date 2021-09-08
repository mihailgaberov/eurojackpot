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


export const getCurrentDate = (data: JackpotData) => {
  return data.last.closingDate.split(',')[0];
}