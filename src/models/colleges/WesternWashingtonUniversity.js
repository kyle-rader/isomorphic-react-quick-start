import College from '../College.js';
import request from 'request';
import $ from 'cheerio';

export default class WesternWashingtonUniversity extends College {

  constructor(name) {
    super(name);
  }

  parseHtmlForSearchCriteria(html) {
    let criteria = {
      'terms': [],
      'sel_gur': [],
      'sel_subj': [],
      'sel_inst': [],
      'sel_day': [
        {name: 'Monday', value:'m'},
        {name: 'Tuesday', value:'t'},
        {name: 'Wednesday', value:'w'},
        {name: 'Thursday', value:'r'},
        {name: 'Friday', value:'f'},
        {name: 'Saturday', value:'s'},
        {name: 'Sunday', value:'u'}
      ],
      'sel_crse': {name: 'Course Number', value: 'text'},
      'begin_hh': [],
      'begin_mi': [
        {name: 'AM', value: 'A'},
        {name: 'PM', value: 'P'}
      ],
      'end_hh': [],
      'end_mi': [
        {name: 'AM', value: 'A'},
        {name: 'PM', value: 'P'}
      ],
      'sel_open': {name: 'Open Sections Only', value: 'bool'},
      'sel_cdts': []
    };
    // Get table in form for quick reference.
    let formTable = html('form[method="post"] > table[align]');
    // Get available terms
    formTable.find('select[name="term"] > option').map((index, item) => {
        criteria['terms'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    // Get available GUR's/ course attributes
    formTable.find('select[name="sel_gur"] > option').map((index, item) => {
      criteria['sel_gur'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    // Get available Subjects
    formTable.find('select[name="sel_subj"] > option').map((index, item) => {
      criteria['sel_subj'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    // Get available Instructors
    formTable.find('select[name="sel_inst"] > option').map((index, item) => {
      criteria['sel_inst'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    // Get available Instructors
    formTable.find('select[name="sel_inst"] > option').map((index, item) => {
      criteria['sel_inst'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    // Add begin and end hour options
    for (let i = 0; i <= 12; i++) {
      let opt = {name: (i < 10 ? '0' : '') + i.toString(), value: i.toString()};
      criteria['begin_hh'].push(opt);
      criteria['end_hh'].push(opt);
    }
    // Get available Credit hours
    formTable.find('select[name="sel_cdts"] > option').map((index, item) => {
      if (item.attribs.value !== '')
        criteria['sel_cdts'].push({name:item.children[0].data.replace(/\n\s*/, ''), value: item.attribs.value});
    });
    console.log(criteria);

    return criteria;
  }

  getSearchCriteria(callback) {
    let options = {
      uri: 'https://admin.wwu.edu/pls/wwis/wwsktime.SelClass',
      method: 'GET'
    };

    request(options, (err, resp, html) => {
      if (err) {
        callback(err);
      }
      else {
        let criteria = this.parseHtmlForSearchCriteria($.load(html));
        if (criteria !== null) {
          callback(null, criteria);
        } else {
          callback({err: 'Could not parse WWU search criteria'});
        }
      }
    });
  }

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
};
