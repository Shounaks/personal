import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent{
  educationInfo : Array<EducationalTimelineNode> = [
    {educationType:"Primary and Secondary Education",institutionName:"Tender Care Home, Aurangabad",extraInfo:"10th (CBSE)",endDate:"2014"},
    {educationType:"Pre-University Education",institutionName:"Vasantrao Naik College, Aurangabad",extraInfo:"12th (State Board)",startDate:"2014",endDate:"2016"},
    {educationType:"University Education",institutionName:"D.I.E.M.S., Aurangabad",extraInfo:"Bachelors in Engineering (Computer Science)",startDate:"2016",endDate:"2020"}
  ];
  getEducationTimeLineAsString(education:EducationalTimelineNode) : string{
    if(education.startDate && education.endDate){
      return education.startDate + " - " + education.endDate;
    }else if(!education.startDate && education.endDate){
      return education.endDate;
    }else if(education.startDate && !education.endDate){
      return education.startDate + " - " + "Present";
    }else return "Info Not Available";
  }
}

interface EducationalTimelineNode{
  educationType?:string,
  institutionName:string,
  extraInfo?:string,
  startDate?: string,
  endDate?: string
}