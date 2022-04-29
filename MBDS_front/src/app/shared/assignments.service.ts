import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AssignmentsService {
  private localProtocol = "http"
  private localPort = ":8010"
  private url = (document.domain.startsWith("localhost") ? this.localProtocol : "https")+"://"+ document.domain + (document.domain.startsWith("localhost") ? this.localPort : "")+"/api"
  /*assignments:Assignment[] = [
    {
      id:1,
      auteur: "Micka",
      matiere: "Angular",
      titre:"Angular",
      nom:"Mr Polo",
      notes:0,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-03-28"),
      rendu:false
    },
    {
      id:2,
      auteur: "Rahiza rahiza Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:10,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },
    {
      id:3,
      auteur: "Micka",
      matiere: "Grails",
      titre: "Grails",
      nom: 'Mr Polo',
      notes:0,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-04-01"),
      rendu:false
    },
    {
      id:4,
      auteur: "Rahiza rahiza Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:18,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },
    {
      id:5,
      auteur: "Rahiza rahiza Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:18,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },
    {
      id:6,
      auteur: "Rahiza rahiza Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:14,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },
    {
      id:7,
      auteur: "Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:11,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },
    {
      id:9,
      auteur: "Micka",
      matiere: "Oracle",
      titre:"Oracle",
      nom: 'Mr Polo',
      notes:13,
      remarques: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      dateDeRendu: new Date("2022-01-22"),
      rendu:true
    },

];*/

  constructor(private loggingService:LoggingService, private http: HttpClient) {
    this.loggingService.setNiveauTrace(2);

  }
  
  public getAssignmentsComplete() {
    return this.http.get(this.url + "/assignmentsComplete");
  }

  public postAssignment(assignment: Assignment) {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(assignment)
    return this.http.post(this.url + '/assignmentsEachStudent', body, {'headers':headers})
  }

  public noterAssignment(assignment: Assignment) {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(assignment)
    return this.http.put(this.url + '/noteAssignment', body, {'headers':headers})
  }

  public editAssignment(assignment: Assignment) {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(assignment)
    return this.http.put(this.url + '/editAssignment', body, {'headers':headers})
  }

  public deleteAssignment(idAssignment: string) {
    return this.http.delete(this.url + '/deleteAssignment/'+idAssignment)
  }


  /*getAssignments():Observable<Assignment[]> {
    // en réalité, bientôt au lieu de renvoyer un tableau codé en dur,
    // on va envoyer une requête à un Web Service sur le cloud, qui mettra un
    // certain temps à répondre. On va donc préparer le terrain en renvoyant
    // non pas directement les données, mais en renvoyant un objet "Observable"
    return of(this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    let a = this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);

    this.loggingService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    this.loggingService.log(assignment.nom, "modifié");

    return of("Assignment modifié");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);

    this.loggingService.log(assignment.nom, "supprimé");

    return of("Assignment supprimé");
  }*/
}
