import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { QueryBuilderConfig } from "angular2-query-builder";
import { FvQueryBuilderComponent } from "./fv-query-builder/fv-query-builder.component";
@Component({
  selector: 'my-app',
  //templateUrl:'./app.component.html',
  template: `
  <app-fv-query-builder id="query-builder" class="margin30" [data]="query" [config]="config">
   
  
  </app-fv-query-builder>
<div class="margin30">
  <textarea >{{query | json}}</textarea>
</div>`,
  styles: ['.margin30 { margin: 30px; }', 'textarea { width: 100%; height: 250px; }']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(FvQueryBuilderComponent) builder: FvQueryBuilderComponent;

  ngAfterViewInit() {
    //this.builder.defaultOperatorMap['functions'] = ['function1','function2'];

    //var sql_stmt = $('#builder').queryBuilder('getSQL', 'question_mark');
    //console.dir(this.builder);
  }


  ngOnInit() {
    let attributes = ["-", "Alleen_AO", "ANW_in_Groep", "ANW_type", "AOP_in_Groep", "Bijsparen_in_Groep", "BP_verlagen_ipv_eventtoets", "Brief_D_Reactiedatum", "Brief_D_Reactiedatum_Echt", "Brief_D_Verzenddatum", "Brief_I_InterneReactiedatum", "Brief_I_Verzenddatum", "Brief_Reactiedatum", "Brief_Verzenddatum", "Combiregeling", "Dubbele_Franchise2018", "Eventtoets", "Eventtoets_Fn", "Fiscaal2015_Staffel_Fn", "Fiscaal2018_staffel", "Fiscaal2018_Staffel_auto", "Fiscaal2018_Staffel_Fn", "Fiscaal2018_Staffel_Fn_Auto", "Geldigheid_staffel", "Groepsleutel", "Handmatige_controle_IAP_deelnemers", "Handmatige_controle_IAP_regeling", "Handmatige_controle_judocs", "Handmatige_judocs", "Indicator_Afwijkende_Aanspraakbepaling", "Judocs_verzenddatum", "Kosten_beleggingsadm_verlagen", "MeerdereHoofdregelingenBijContract", "MeerdereHoofdregelingenInGroep", "Min_datum_bevestiging", "Min_datum_herinnering", "Min_datum_judocs", "MVW", "Naar_enkele_franchise", "OpbouwperunagesOP", "OpbouwperunagesPP", "OpbouwperunagesWZP", "Overige_aanpassing_anders", "Overige_aanpassing_franchise", "Overige_aanpassing_opbouw", "Overschot_event_naar_asr", "Overschot_nav_eventtoetsing", "P123_triggeren", "Parkeerreden", "Pensioenleeftijd_handhaven", "PP_in_Groep", "RedenHandmatigJ02", "RedenHandmatigJ03", "RedenHandmatigJ05", "RedenHandmatigJ08", "RedenHandmatigJ09", "RedenHandmatigJ10", "RedenHandmatigJ13", "RedenHandmatigJ14", "RedenHandmatigJ23", "Regelingen_in_Groep", "REGL", "Reglementsomschrijving", "RegPL68_tar_tabel_01", "RegPL68_tar_tabel_11en12", "RegPL68_tar_tabel_13en14", "RegPL68_tar_tabel_15en16", "RegPL68_tar_tabel_21tm24", "RegPL68_tar_tabel_25tm28", "RegPL68_tar_tabel_41", "RegPL68_tar_tabel_63", "UitsluitenMVWselectie", "UitsluitenP123bestand", "UITV_OVK", "VPA_dekking", "VPA_huidig_ANW", "VPA_huidig_NP", "VPA_huidig_OPBP", "VPA_nieuw_ANW", "VPA_nieuw_NP", "VPA_nieuw_OPBP", "VPA_wijziging", "VZP", "Wachtreden", "WGBR", "WZP_in_Groep", "Zelfstandig_NP"];

    let fields = {};
    attributes.map((e) => {
      fields[e] = { name: e, type: "category", options: attributes.map(a => { return { name: a, value: a } }) };
    });
    this.config = { fields: fields };
  }
  config: QueryBuilderConfig

  query = {
    condition: 'and',
    rules: [

    ]
  };

  //  = {
  //   fields: {
  //     "age": { name: "Age", type: 'number' },
  //     "gender": {
  //       name: "Gender",
  //       type: 'category',
  //       options: [
  //         { name: "Male", value: "m" },
  //         { name: "Female", value: "f" }
  //       ]
  //     },
  //     "name": { name: "Name", type: 'string' },
  //     "educated": { name: "College Degree?", type: 'boolean' },
  //     "birthday": { name: "Birthday", type: 'date' },
  //     "school": { name: "School", type: 'string', nullable: true },
  //     "whatever": {  name: "whatever", type: 'functions' },
  //     "occupation": {
  //       name: "Occupation",
  //       type: 'string',
  //       options: [
  //         { name: "Student", value: "student" },
  //         { name: "Teacher", value: "teacher" },
  //         { name: "Unemployed", value: "unemployed" },
  //         { name: "Scientist", value: "scientist" }
  //       ]
  //     }
  //   }
  //};
}