import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public titulo!: string;
    public categorias!: string;
    public vendidos!: string;
    public produto!: string;

  constructor() { }

  ngOnInit() {
    this.titulo! = 'Vire um GameMania Pro e ganhe 10% de desconto em todos os produtos, além de ganhar frete grátis em qualquer compra';
    this.categorias! = 'Categorias'
    this.vendidos! = 'Produtos mais vendidos'
    this.produto! = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  }

}
