import { Matiere } from "../matieres/matiere.model";
import { User } from "../users/user.modele";

export class Assignment {
  _id!:string;
  eleveRef!:User;
  matiereRef!:Matiere;
  titre!:string;
  remarques!: string;
  notes!: number;
  dateDeRendu!:Date;
  rendu!:boolean;
}
