import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbarComponent } from './postbar.component';

describe('PostbarComponent', () => {
  let component: PostbarComponent;
  let fixture: ComponentFixture<PostbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
