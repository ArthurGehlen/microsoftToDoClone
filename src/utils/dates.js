let FormatedDates = class FormatedDates {
    constructor(weekday_num, month_num) {
        this.weekday_num = weekday_num
        this.month_num = month_num
    }

    static get_weekday(weekday_num) {
        switch (weekday_num) {
            case 0: {
                return 'domingo'
            }
            case 1: {
                return 'segunda'
            }
            case 2: {
                return 'terça'
            }
            case 3: {
                return 'quarta-feira'
            }
            case 4: {
                return 'quinta-feira'
            }
            case 5: {
                return 'sexta-feira'
            }
            case 6: {
                return 'sábado'
            }
            default: {
                return ''
            }
        }
    }

    static get_month(month_num) {
        switch (month_num) {
            case 0: {
                return 'janeiro'
            }
            case 1: {
                return 'fevereiro'
            }
            case 2: {
                return 'março'
            }
            case 3: {
                return 'abril'
            }
            case 4: {
                return 'maio'
            }
            case 5: {
                return 'junho'
            }
            case 6: {
                return 'julho'
            }
            case 7: {
                return 'agosto'
            }
            case 8: {
                return 'setembro'
            }
            case 9: {
                return 'outubro'
            }
            case 10: {
                return 'novembro'
            }
            case 11: {
                return 'dezembro'
            }
            default: {
                return ''
            }
        }
    }
}

export default FormatedDates
