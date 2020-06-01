import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postbar',
  templateUrl: './postbar.component.html',
  styleUrls: ['./postbar.component.scss']
})
export class PostbarComponent implements OnInit {

  posts = [{
      name:"Text Book",
      postid:1,
      postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
      isTreanding:true,
      isRecent:true,
      price:1000,
      currency:"INR",
      totalViews:345
  },
  {
    name:"Text Book",
    postid:1,
    postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
    isTreanding:true,
    isRecent:true,
    price:1000,
    currency:"INR",
    totalViews:345
},{
  name:"Text Book",
  postid:1,
  postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
  isTreanding:true,
  isRecent:true,
  price:1000,
  currency:"INR",
  totalViews:345
},
  {
    name:"Text Book",
    postid:1,
    postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
    isTreanding:true,
    isRecent:true,
    price:1000,
    currency:"INR",
    totalViews:345
},
{
  name:"Text Book",
  postid:1,
  postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
  isTreanding:true,
  isRecent:true,
  price:1000,
  currency:"INR",
  totalViews:345
},
{
  name:"Text Book",
  postid:1,
  postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
  isTreanding:true,
  isRecent:true,
  price:1000,
  currency:"INR",
  totalViews:345
},
{
  name:"Text Book",
  postid:1,
  postprimaryimage:["cdn.com/gethksdbj/jhsdvjg.jpg","cdn.com/gethksdbj/jhsdvjg.jpg"],
  isTreanding:true,
  isRecent:true,
  price:1000,
  currency:"INR",
  totalViews:345
}]

  constructor() { }

  ngOnInit(): void {
  }

}
