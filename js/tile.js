var container = new Vue({
   el:"#container" ,
   data:{
       a00:"",a01:"",a02:"",a03:"",
       a10:"",a11:"",a12:"",a13:"",
       a20:"",a21:"",a22:"",a23:"",
       a30:"",a31:"",a32:"",a33:"",
   },
   computed:{
       counta:function(){
        var aa=(this.a00==""? 0:parseInt(this.a00))+(this.a01==""? 0:parseInt(this.a01))+(this.a02==""? 0:parseInt(this.a02))+(this.a03==""? 0:parseInt(this.a03))+
        (this.a10==""? 0:parseInt(this.a10))+(this.a11==""? 0:parseInt(this.a11))+(this.a12==""? 0:parseInt(this.a12))+(this.a13==""? 0:parseInt(this.a13))+
        (this.a20==""? 0:parseInt(this.a20))+(this.a21==""? 0:parseInt(this.a21))+(this.a22==""? 0:parseInt(this.a22))+(this.a23==""? 0:parseInt(this.a23))+
        (this.a30==""? 0:parseInt(this.a30))+(this.a31==""? 0:parseInt(this.a31))+(this.a32==""? 0:parseInt(this.a32))+(this.a33==""? 0:parseInt(this.a33))
        ;
        for(var el in this.$data){
            switch(this[el]){
                case 4:aa+=1;break;
                case 8:aa+=3;break;
                case 16:aa+=8;break;
                case 32:aa+=20;break;
                case 64:aa+=50;break;
                case 128:aa+=120;break;
                case 256:aa+=250;break;
                case 512:aa+=550;break;
                case 1024:aa+=1100;break;
                case 2048:aa+=2400;break;
            }
        }
        return aa;
       },
       spacenum:function(){
           var space=0;
           for(var el in this.$data){
            if(this[el]==""){space++;}
           }
           return space;
       },
       positionarray:function(){
           var a=[];
           var j=0;
           for(var el in this.$data){
               if(this[el]!=""){a.push(el);}
           }
        return a;
    },
   },
   methods:{
      generate:function(){
            var newr = (Math.random()*3).toFixed(0);
            var newc = (Math.random()*3).toFixed(0);
            if(this["a"+newr+newc]){
                this.generate();
            } else{
                var a=Math.random()<0.9?2:4;
                this["a"+newr+newc]=a;
                this.getvalue(newr,newc,a);
            }
      },
      nextstep:function(){
          
          if(this.spacenum==0){
            var mask=document.getElementById("gameover");
            mask.style.display='flex';
          }
          else if(this.spacenum==1){this.generate();}
          else{this.generate();this.generate();}
          score.innerText=this.counta;
          color();
          //this.colorflag=true;

      },
      reset:function(){
          var mask=document.getElementById("gameover");
          mask.style.display='none';
          var colorflag=false;
          for(var i=0;i<4;i++){
              for(var j=0;j<4;j++){
                  this["a"+i+j]="";
                  this.getvalue(i,j,0);
              }
          }
          this.nextstep();
      },
      getvalue:function(i,j,v){
          var cel=document.getElementById("cell-"+i+j);
          if(v==""){v=0;}
          cel.setAttribute("val",v);
      },
      
      move:function(d){
          var flag=true;
          var oldp=this.positionarray;
          var olds=this.counta;
          //console.log(oldp);
          switch(d){
              case 0://up  i行j列
                for(var j=0;j<4;j++){
                    for(var i=1;i<4;i++){
                        for(var k=i;k>0;k--)
                        if(this["a"+(k-1)+j]==""&&this["a"+k+j]!=0){
                            this["a"+(k-1)+j]=this["a"+k+j];
                            this["a"+k+j]="";
                            this.getvalue(k,j,0);
                            this.getvalue(k-1,j,this["a"+(k-1)+j]);
                        }
                        else if(this["a"+(k-1)+j]==this["a"+k+j]){
                            this["a"+(k-1)+j]=this["a"+(k-1)+j]+this["a"+k+j];
                            this["a"+k+j]="";
                            this.getvalue(k,j,0);
                            this.getvalue(k-1,j,this["a"+(k-1)+j]);
                        }
                    }
                }
              break;
              case 1://down
                for(var j=0;j<4;j++){
                    for(var i=2;i>-1;i--){
                        for(var k=i;k<4;k++)
                        if(this["a"+(k+1)+j]==""&&this["a"+k+j]!=0){
                            this["a"+(k+1)+j]=this["a"+k+j];
                            this["a"+k+j]="";
                            this.getvalue(k,j,0);
                            this.getvalue(k+1,j,this["a"+(k+1)+j]);
                        }
                        else if(this["a"+(k+1)+j]==this["a"+k+j]){
                            this["a"+(k+1)+j]=this["a"+(k+1)+j]+this["a"+k+j];
                            this["a"+k+j]="";
                            this.getvalue(k,j,0);
                            this.getvalue(k+1,j,this["a"+(k+1)+j]);
                        }
                    }
                }
              break;
              case 2://left
                for(var i=0;i<4;i++){
                    for(var j=1;j<4;j++){
                        for(var k=j;k>0;k--)
                        if(this["a"+i+(k-1)]==""&&this["a"+i+k]!=0){
                            this["a"+i+(k-1)]=this["a"+i+k];
                            this["a"+i+k]="";
                            this.getvalue(i,k,0);
                            this.getvalue(i,k-1,this["a"+i+(k-1)]);
                        }
                        else if(this["a"+i+(k-1)]==this["a"+i+k]){
                            this["a"+i+(k-1)]=this["a"+i+(k-1)]+this["a"+i+k];
                            this["a"+i+k]="";
                            this.getvalue(i,k,0);
                            this.getvalue(i,k-1,this["a"+i+(k-1)]);
                        }
                    }
                }
              break;
              case 3://right
                for(var i=0;i<4;i++){
                    for(var j=2;j>-1;j--){
                        for(var k=j;k<4;k++)
                        if(this["a"+i+(k+1)]==""&&this["a"+i+k]!=0){
                            this["a"+i+(k+1)]=this["a"+i+k];
                            this["a"+i+k]="";
                            this.getvalue(i,k,0);
                            this.getvalue(i,k+1,this["a"+i+(k+1)]);
                        }
                        else if(this["a"+i+(k+1)]==this["a"+i+k]){
                            this["a"+i+(k+1)]=this["a"+i+(k+1)]+this["a"+i+k];
                            this["a"+i+k]="";
                            this.getvalue(i,k,0);
                            this.getvalue(i,k+1,this["a"+i+(k+1)]);
                        }
                    }
                }
              break;
          }
          if(oldp==this.positionarray&&olds==this.counta&&this.spacenum!=0){flag=false;}
          //console.log(flag);
          if(flag==true){this.nextstep();}
      },
      
   }
})
document.addEventListener('keyup',function(e){
    //console.log(e.keyCode);
    switch(e.keyCode){
        case 38:container.move(0);break;
        case 40:container.move(1);break;
        case 37:container.move(2);break;
        case 39:container.move(3);break;
    }
})

