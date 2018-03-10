import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare let particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isChecked = false;
  public isLoading = false;
  public defaultName = 'speykey';
  public defaultPwd = 'zhangxingyu123';

  constructor(private router: Router, private fb: FormBuilder, private confirmServe: NzModalService) {
    this.loginForm = this.fb.group({
      userName: [sessionStorage.getItem('userName'), [Validators.required]],
      passWord: [sessionStorage.getItem('passWord'), [Validators.required]],
      remember: [false]
    });
  }

  login(userName: any, pwd: any) {
    const uName = userName.value;
    const uPwd = pwd.value;
    this.isLoading = true;
    if (uName != this.defaultName || uPwd != this.defaultPwd) {
      this.confirmServe.error({
        title: '提示',
        content: '用户名或密码错误！'
      });
    } else {
      this.router.navigate(['../home', {
        userID: 0,
        name: this.loginForm.controls['userName'].value
      }]);
    }
    this.isLoading = false;
  }

  isChange() {
    if (!this.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  rememberUser() {
    if (this.loginForm.controls['remember'].value == true && this.loginForm.controls['userName'].value != '' && this.loginForm.controls['passWord'].value != '') {
      sessionStorage.setItem('userName', this.loginForm.controls['userName'].value);
      sessionStorage.setItem('passWord', this.loginForm.controls['passWord'].value);
    } else {
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('passWord');
    }
  }

  loginBG() {
    particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': 100,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#fff'
        },
        'shape': {
          'type': 'circle',
          'strocke': {
            'width': 0,
            'color': '#fff'
          },
          'polygon': {
            'nb_sides': 5
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 5,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 80,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 200,
          'color': '#fff',
          'opacity': 0.4,
          'width': 2
        },
        'move': {
          'enable': true,
          'speed': 2,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 140,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 9,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles+nb': 2
          }
        }
      },
      'retina_detect': true
    });
  }

  ngOnInit() {
    this.loginBG();
  }

}
