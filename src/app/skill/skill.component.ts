import { Component, OnInit } from '@angular/core';
import {faAngular, faBootstrap, faCss3, faCss3Alt, faDocker, faGooglePlusSquare, faHtml5, faJava, faJsSquare, faVuejs, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faBookAtlas, faDatabase} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillsets:Array<Skillset>;
  
  constructor() {
    let angular:Skill= {
      name: "Angular",
      fontAwesomeIcon: faAngular,
      skillInfo: "Working with Angular 14 having implemented multiple websites with Angular Routing, Forms, and Security",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let bootstrap:Skill= {
      name: "Bootstrap",
      fontAwesomeIcon: faBootstrap,
      skillInfo: "Widely used CSS(/JS) framework which is popular to create responsive websites quickly in a team",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let bulma:Skill= {
      name: "Bulma",
      fontAwesomeIcon: faCss3,
      skillInfo: "A smaller-but-awesome CSS Framework which is purely CSS based and hence can be quickly integrated in any project",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 3
    }
    let tailwind:Skill= {
      name: "Tailwind",
      fontAwesomeIcon: faCss3Alt,
      skillInfo: "Utility Classes in CSS were the most awesoem things that TailwindCSS put on the table.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let typescript:Skill= {
      name: "Typescript",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Javascript but better and safer 😂, also Great tooling support with IntelliSense",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let javascript:Skill= {
      name: "Javascript",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Basic good-ol' Javascript, the easiest thing to make website in, but very primitive as compared to other Languages.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 3
    }
    let vue:Skill= {
      name: "Vue",
      fontAwesomeIcon: faVuejs,
      skillInfo: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 1
    }
    let svelte:Skill= {
      name: "Svelte",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 1
    }
    let css:Skill= {
      name: "CSS3",
      fontAwesomeIcon: faCss3Alt,
      skillInfo: "Cascading Style Sheet used to add properties to normal HTML elements!",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 2
    }

    let html:Skill= {
      name: "HTML5",
      fontAwesomeIcon: faHtml5,
      skillInfo: "<!doctype html> Bruh!",
      backgroundImage: "assets/technology/html5.png",
      Profeciency: 3
    }
    let frontend:Skillset = {
      name: "Frontend",
      skills: [angular,bootstrap,bulma,tailwind,typescript,javascript,vue,svelte,css,html],
      description: "Creating Beautiful websites which attracts Viewers"
    }

    let oracle:Skill= {
      name: "Oracle Database 11g and 13c",
      skillInfo: "One of the best and tested databases in the industry when it comes to Relational Databases",
      backgroundImage: "assets/technology/angular.png",
      fontAwesomeIcon: faDatabase,
      Profeciency: 4
    }
    let mysql:Skill= {
      name: "MySQL and MySQL Workbench",
      skillInfo: "Since Oracle needs money xD, why not learn something free & Open Source",
      fontAwesomeIcon: faDatabase,
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let java:Skill= {
      name: "Java",
      fontAwesomeIcon: faJava,
      skillInfo: "Bedrock (Edition) Of all enterprise systems, most reliable Programming currently",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let springBoot:Skill= {
      name: "Spring Boot",
      fontAwesomeIcon: faJava,
      skillInfo: "The Spring Ecosystem provides IOC and other awesome features, along with Spring Boot its a absolute Banger of an ecosystem!🤩",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let backend:Skillset = {
      name: "Backend",
      skills: [oracle,mysql,java,springBoot],
      description: "Developing Infrastructure that will handle and store precious data"
    }
    
    let docker:Skill= {
      name: "Docker",
      fontAwesomeIcon: faDocker,
      skillInfo: "Ensuring that our code will run of any machine (((ofc inside containers))).",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 3
    }
    let gcp:Skill= {
      name: "Google Cloud Platform",
      fontAwesomeIcon: faGooglePlusSquare,
      skillInfo: "I know a basic GCP services and mainly used this to check logs of multiple microservices interacting with each other.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 2
    }
    let swagger:Skill= {
      name: "Swagger - Documentation & CodeGen",
      fontAwesomeIcon: faBookAtlas,
      skillInfo: "Keeping the Documentation part aside, which is truely a plus, It provides CodeGen meaning we dont even need to write Endpoints or DTO and update API extremely quickly!",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let tools:Skillset = {
      name: "Tools",
      skills: [docker,gcp,swagger],
      description: "Developing Infrastructure that will handle and store precious data"
    }

    this.skillsets = [frontend,backend,tools];
  }

  ngOnInit(): void {
  }

  getNumberOfStars(profeciency:number):Array<Number>{
    return new Array(profeciency);
  }

  getNumberOfMissingStars(profeciency:number):Array<Number>{
    if(profeciency < 0 || profeciency > 5) return new Array();
    else return new Array(5- profeciency);
  }

  getStarColor(profeciency:number):string{
    if(profeciency === 5){return 'bg-yellow-600'}
    else if(profeciency === 4){return 'bg-slate-500'}
    else return 'bg-yellow-800';
  }
}

interface Skillset{
  name:string,
  skills:Array<Skill>,
  description: string
}

interface Skill{
  name:string,
  fontAwesomeIcon:IconDefinition,
  backgroundImage:string,
  skillInfo:string,
  Profeciency:number
}