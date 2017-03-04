/**
 * Created by gopi on 1/15/17.
 */
import moment from 'moment';

export const formatDate = function(date, format){
    if(!format){
        format = "DD-MMM-YYYY"
    }
    return moment(date).format(format);
}