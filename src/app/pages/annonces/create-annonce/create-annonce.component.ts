import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Annonce} from "../../../models/annonce.module";
import {AnnonceService} from "../../../services/annonce.service";
import {AnnonceType} from "../../../models/annonce-type.module";
import {AnnonceTypeService} from "../../../services/annonce-type.service";

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrl: './create-annonce.component.css'
})
export class CreateAnnonceComponent implements OnInit{
  newAnnonce: Annonce={ title: '', content: '', slug: '',"views":0,created_at:'', updated_at:''
    ,featuredImage:'',firstPage:false,annonceType:{id:1,name: 'Licence', description: 'Licence', slug: 'licence'} };
  thisFile:any;
  annonceTypes:AnnonceType[]=[];
  constructor(
    private annonceService: AnnonceService,
    private annonceTypeService:AnnonceTypeService,
    private router: Router
  ) { }
  loadAnnonces(): void {
    this.annonceTypeService.getAllAnnonceTypes().subscribe(data => {
      this.annonceTypes = data;
    });
  }
  ngOnInit(): void {
    this.loadAnnonces();
  }
  createAnnonce(): void {
    const fd = new FormData();
    fd.append('title',this.newAnnonce.title);
    fd.append('content',this.newAnnonce.content);
    fd.append('slug',this.newAnnonce.slug);
    fd.append('views',this.newAnnonce.views+"");
    fd.append('firstPage',this.newAnnonce.firstPage+"");
    fd.append('annonceType.id',this.newAnnonce.annonceType.id+"");
    fd.append('annonceType.name',this.newAnnonce.annonceType.name);
    fd.append('annonceType.description',this.newAnnonce.annonceType.description);
    fd.append('annonceType.slug',this.newAnnonce.annonceType.slug);
    fd.append('file', this.thisFile);
    this.annonceService.createAnnonce(fd).subscribe(() => {
      this.newAnnonce = { title: '', content: '', slug: '',"views":0,created_at:'',
        updated_at:'',featuredImage:'',firstPage:false,annonceType:{name: 'string', description: '', slug: ''} };
      Swal.fire(
        'Create!',
        'Your Annonce has been created successefully.',
        'success'
      );
      this.router.navigate(['/annonces']); // Adjust the route based on your actual route configuration
    });
  }
  changeFile(event:any){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0)
      this.thisFile = inputElement.files[0];
    console.log(this.thisFile)
  }
}
