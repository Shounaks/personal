import { Component, OnInit } from '@angular/core';
import { faWpforms, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resumeFaIcon:IconDefinition = faWpforms;
  startDate = new Date(2020, 9, 23); // 23-SEPTEMBER-2020

  public calculateExperience(): number{
    const currentDate = new Date();
    const initialDate = new Date(2020, 9, 1);
    
    var countMonth=0;
    while(currentDate >= initialDate){
      countMonth++;
      var month = initialDate.getMonth();
      month++;
      if(month > 11){
        var yearToSet = initialDate.getFullYear();
        yearToSet++;
        initialDate.setFullYear(yearToSet);
        initialDate.setMonth(month-11-1);
      }else {
        initialDate.setMonth(month)
      }
    }
    return countMonth;
  }
  public calculateExperienceInYears():number{
    return Math.floor(this.calculateExperience()/12);
  }

  public getStartDateInLocaleDateFormat(): string {
    return this.startDate.toLocaleDateString('en-IN',{day: 'numeric',month:'long',year: 'numeric'});
  }
  public getCurrentDateInLocaleDateFormat(): string {
    return new Date().toLocaleDateString('en-IN',{day: 'numeric',month:'long',year: 'numeric'});
  }
}
