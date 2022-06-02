import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametri-rotta',
  templateUrl: './parametri-rotta.component.html',
  styleUrls: ['./parametri-rotta.component.css']
})
export class ParametriRottaComponent implements OnInit {

  id?: string;

  constructor(private route: ActivatedRoute) {

    route.params.subscribe(params => this.id = params['id'])

  }

  ngOnInit(): void {
  }

}
