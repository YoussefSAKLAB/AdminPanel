import {AnnonceType} from "./annonce-type.module";

export interface Annonce {
  id?: number;
  title: string;
  content: any;
  slug: string;
  views:number;
  created_at?: string;
  updated_at?: string;
  featuredImage:any;
  firstPage:boolean;
  annonceType:AnnonceType;
}
