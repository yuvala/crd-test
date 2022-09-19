import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameMangerService } from 'src/app/services/game-manger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  get user() { return this.gameManger.user }
  constructor(private router: Router, public gameManger: GameMangerService) { }

  ngOnInit(): void {
  }

  begin() {
    this.gameManger.begin()
      .subscribe(x => {
        this.router.navigate(['/board'])
      })
  }

  // join() {
  //   this.gameManger.join(this.user)
  // }


}
