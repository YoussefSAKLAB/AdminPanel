import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Annonce} from "../../../models/annonce.module";
import {AnnonceService} from "../../../services/annonce.service";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrl: './annonces.component.css'
})
export class AnnoncesComponent implements OnInit{
  annonces: Annonce[] = [];

  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadAnnonces();
  }

  loadAnnonces(): void {
    this.annonceService.getAllAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }
  editAnnonce(AnnonceId: number): void {
    if (AnnonceId) {
      this.router.navigate(['/annonces/edit', AnnonceId]);
    }
  }
  deleteAnnonce(AnnonceId: number): void {
    // Show a confirmation dialog using SweetAlert
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Annonce!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      // If the user confirms deletion
      if (result.isConfirmed) {
        // Make a call to the departmentService to delete the department
        this.annonceService.deleteAnnonce(AnnonceId).subscribe(
          () => {
            // On successful deletion, show a success message with SweetAlert
            Swal.fire(
              'Deleted!',
              'Your Annonce has been deleted.',
              'success'
            );
            // Refresh the local list of departments after deletion
            this.annonces = this.annonces.filter(annonce => annonce.id !== AnnonceId);
          },
          // If an error occurs during deletion, show an error message with SweetAlert
          error => {
            console.error('Error deleting Annonce:', error);
            Swal.fire(
              'Error!',
              'An error occurred while deleting this Annonce.',
              'error'
            );
          }
        );
      }
    });
  }
}
