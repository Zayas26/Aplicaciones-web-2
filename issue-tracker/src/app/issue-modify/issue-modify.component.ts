import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';


@Component({
  selector: 'app-issue-modify',
  templateUrl: './issue-modify.component.html',
  styleUrls: ['./issue-modify.component.css']
})
export class IssueModifyComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Input() issueNo: number | null=null; 
  @Input() title: string | null=null; 
  @Input() description: string | null=null; 
  @Input() priority: string | null=null;
  @Input() type: string | null=null;  
  @Output() formClose=new EventEmitter();
  suggestions: Issue[]=[];

  constructor(private builder:FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm= this.builder.group({
      title: ['',Validators.required],
      description:[''],
      priority:['',Validators.required],
      type:['',Validators.required],
    });
    this.issueForm.controls.title.valueChanges.subscribe((
      title:string)=>{
        this.suggestions= this.issueService.getSuggestions(title);
      });
  }

  modifyIssue(){
    if(this.issueForm &&this.issueForm.invalid){
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issueService.modifyIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
