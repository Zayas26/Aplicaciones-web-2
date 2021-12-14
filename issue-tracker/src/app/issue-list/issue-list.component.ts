import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues:Issue[]=[];
  showReportIssue=false;
  showModifyIssue=false;
  selectedIssue:Issue |null=null;
  constructor(private issueService:IssuesService) { }
  
  private getIssues(){
    this.issues=this.issueService.getPendingIssues();
  }

  ngOnInit(): void {
    this.getIssues();
  }
  // Diapositivia 45
  onCloseReport(){
    this.showReportIssue=false;
    this.getIssues();
  }
  onCloseModify(){
    this.showModifyIssue=false;
    this.getIssues();
  }

  onConfirm(confirmed:boolean){
    if(confirmed && this.selectedIssue){
        this.issueService.completeIssue(this.selectedIssue);
        this.getIssues();
    }
    this.selectedIssue=null;
  }

}
