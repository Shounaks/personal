import { Component, OnInit } from '@angular/core';
import { faUnity,faCss3Alt,faGithub,faHtml5,faJsSquare,IconDefinition,faJava,faAngular } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  unityIcon = faUnity;
  css3Icon = faCss3Alt;
  gitIcon = faGithub;
  htmlIcon = faHtml5;
  jsIcon = faJsSquare;
  javaIcon = faJava;
  programmingIcon = faLaptopCode;
  angularIcon = faAngular;


  projects: Array<ProjectData> = [];
  constructor() { 
    // ProjectContributor Section
    let aakash: ProjectContributor = {
      name: "Aakash Pawar", 
      imageUrl: "assets/akash.jpg",
      linkedinUrl: "https://www.linkedin.com/in/akashpawar/"
    }
    let ratnesh: ProjectContributor = {
      name: "Ratnesh Kumar", 
      imageUrl: "assets/ratnesh.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ratnesh-kumar-1nine9six/"
    }
    let sachin: ProjectContributor = {
      name: "Sachin Kapate", 
      imageUrl: "assets/sachin.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sachinkapate/"
    }
    let tejal: ProjectContributor = {
      name: "Tejal Bhoge", 
      imageUrl: "assets/tejal.jpg",
      linkedinUrl: "https://www.linkedin.com/in/tejal-bhoge-9729081b7/"
    }
    let akshay: ProjectContributor = {
      name: "Akshay Bhaskare", 
      imageUrl: "assets/akshay.jpg",
      linkedinUrl: "https://www.linkedin.com/in/akshay-bhaskare-888519186/"
    }
    let pratik: ProjectContributor = {
      name: "Pratik Kurvalkar", 
      imageUrl: "assets/pratik.jpg",
      linkedinUrl: "https://www.linkedin.com/in/pratik-kurwalkar-91646713a/"
    }
    let shlok: ProjectContributor = {
      name: "Shlok Kambhale", 
      imageUrl: "assets/shlok.jpg",
      linkedinUrl: "https://www.linkedin.com/in/shlok-k-442a96126/"
    }
    // ProjectData
    let arcania: ProjectData = {
      name: "Arcania - 2D DungeonCrawler",
      description: "Arcania is a video game which is scripted in C# and has elements of Role Playing Game and an Action Game created using Unity3D.",
      images: ["https://images7.alphacoders.com/493/493639.jpg"],
      technologiesUsed: ["unity3D","C#","Github","WebAssembly","Heroku"],
      members: [aakash,ratnesh,sachin]
    }
    let suvidha: ProjectData = {
      name: "Suvidha-Blood Bank Management System",
      description: "Suvidha is a basic ERM program written in C# using .NET framework and MS-SQL with Bootstrap, PopperJS and many other AWESOME libraries in frontend.",
      images: ["https://medicarepharmabusiness.com/wp-content/uploads/2017/11/blood-donationsjpg-07b8741b57623b28jpg-4fe7c56e6b01086a.jpg"],
      technologiesUsed: ["ASP.NET","C#","HTML","CSS","Bootstrap", "MS-SQL"],
      members: [tejal,akshay]
    }
    let presenT: ProjectData = {
      name: "PresenT-Attendance Management System",
      description: "Created a system which is able to take attendance of Students, process it, and store the report in XLS Format. Main Technology used was JavaEE and Apache POI.",
      images: ["https://cdn9.dissolve.com/p/D985_45_137/D985_45_137_1200.jpg"],
      technologiesUsed: ["JavaEE","Microsoft Excel","HTML","CSS","JS"],
      members: [pratik,shlok]
    }
    let gladiator: ProjectData = {
      name: "Gladiator-Console based Dungeon crawler game",
      description: "Gladiatoris an angband clonepurely built using C",
      images: ["https://i.ytimg.com/vi/vxF1osPkplA/maxresdefault.jpg"],
      technologiesUsed: ["C"]
    }
    let khamang: ProjectData = {
      name: "Khamang-Android Cookbook and Sharing app",
      description: "Khamang is a user application that is used to store and share the Recipes of the Food Dishes online built using Android studio and Firebase.",
      images: ["https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/pav_bhaji.jpg"],
      technologiesUsed: ["Android Studio","Java","Gradle","Google FireBase", "MySQL"]
    }
    let bfCompiler: ProjectData = {
      name: "BrainFuck Interpreter",
      description: "Esoteric Language Interpreter written using basic C",
      images: ["https://i.redd.it/ysomzew1lpwz.jpg"],
      technologiesUsed: ["C"]
    }
    let personalWebsite: ProjectData = {
      name: "Personal Website",
      description: "This website was created and hosted with 💖 by Shounak",
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Magnasco%2C_Alessandro_-_Hermit_in_the_Desert_-_Google_Art_Project.jpg/1024px-Magnasco%2C_Alessandro_-_Hermit_in_the_Desert_-_Google_Art_Project.jpg"],
      technologiesUsed: ["Angular","HTML", "CSS", "JS", "TailwindCSS"]
    }
    //Add it here! until backend is created!
    this.projects = [personalWebsite,arcania,suvidha,presenT,khamang,gladiator,bfCompiler];
  }

  ngOnInit(): void {
  }

}


interface ProjectData{
  name:string,
  description:string,
  images: Array<String>
  technologiesUsed:Array<String>, //use Pipe to transform string to Icons using FontAwesome!
  members?: Array<ProjectContributor> 
}

interface ProjectContributor{
  name:string,
  imageUrl:string,
  linkedinUrl:string
}

//TODO:  Use this interface
interface iconDisplay{
  name:string,
  icon:IconDefinition,
  classColour:string
}