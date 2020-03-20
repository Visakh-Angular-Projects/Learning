import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	title = 'learnangular5 at night';
	query: string;
	artists: object;

	constructor()
	{
		this.query = "";
		this.artists = [{"name": "Visakh"},{"name": "Amitha"}];
	}

	showArtist(e, item)
	{
		console.log(e);
		this.title = item.name;
		this.query = item.name;
	}
}
