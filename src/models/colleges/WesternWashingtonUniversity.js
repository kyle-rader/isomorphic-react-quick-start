import College from '../College.js';

export default class WesternWashingtonUniversity extends College {

  constructor(name) {
    super(name);
  }

  getSearchCriteria() {
    console.log(`${this.name} is getting its search criteria`);

    /*
    $.ajax({
      url: 'https://admin.wwu.edu/pls/wwis/wwsktime.ListClass?sel_subj=dummy&sel_subj=dummy&sel_gur=dummy&sel_gur=dummy&sel_day=dummy&sel_open=dummy&sel_crn=&term=201540&sel_gur=All&sel_subj=CSCI&sel_inst=ANY&sel_crse=&begin_hh=0&begin_mi=A&end_hh=0&end_mi=A&sel_cdts=%25',
      method: 'POST',
      dataType: 'html',
      async: false,
      crossDomain: true,
      always: (data, textStatus, err) => {
        console.log(data);
        console.log(textStatus);
        console.log(err);
      }
    });
    */

  }
};
