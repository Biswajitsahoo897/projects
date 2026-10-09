// In-memory demo data (a real system would use a database)
const users={student1:{role:"student",name:"Biswajit Sahoo",id:"S01"},faculty1:{role:"faculty",name:"Prof. Sibun Nath"},admin1:{role:"admin",name:"Admin"},hod1:{role:"hod",name:"Head of Department"}};
const db={
 students:[{id:"S01",name:"Biswajit Sahoo",reg:"2301020238",sem:7},{id:"S02",name:"B Paawan Kumar",reg:"2301020209",sem:7},{id:"S03",name:"Abinas Sahoo",reg:"2301020217",sem:7},{id:"S04",name:"Saswat Mohallick",reg:"2301020277",sem:7},{id:"S05",name:"Shivam Patel",reg:"2301020282",sem:7}],
 courses:[{code:"CS435",name:"Software Engineering",fac:"Prof. Sibun Nath",cr:4},{code:"CS431",name:"Computer Networks",fac:"Prof. A. Das",cr:3},{code:"CS437",name:"Machine Learning",fac:"Prof. R. Sahu",cr:3}],
 att:{S01:{CS435:{p:27,t:30},CS431:{p:22,t:30},CS437:{p:25,t:28}}},
 marks:[{sid:"S01",code:"CS435",m:84},{sid:"S01",code:"CS431",m:72},{sid:"S01",code:"CS437",m:66}],
 notices:[{t:"Case study submission",d:"30/09/2026",b:"Software Engineering case study reports are due on 30 September."},{t:"Mid-semester exam schedule",d:"05/10/2026",b:"Timetable will be displayed on the notice board."}],
 tt:[["Mon","CS435","CS431","-","CS437"],["Tue","CS437","CS435","CS431","-"],["Wed","CS431","-","CS435","CS437"],["Thu","CS435","CS437","-","CS431"],["Fri","-","CS431","CS437","CS435"]]};
const menus={student:["Dashboard","Profile","Courses","Attendance","Timetable","Results","Notices"],faculty:["Dashboard","Mark Attendance","Enter Marks","Students","Notices"],admin:["Dashboard","Manage Students","Manage Courses","Notices","Reports"],hod:["Dashboard","Reports","Students","Notices"]};
let cur=null;
const $=id=>document.getElementById(id);
const grade=m=>m>=90?"O":m>=80?"E":m>=70?"A":m>=60?"B":m>=50?"C":"F";
const table=(h,rows)=>`<table><tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;

function login(){
 const u=$("user").value.trim(),p=$("pass").value,r=$("role").value,x=users[u];
 if(!u||!p){$("err").textContent="Please fill in all fields.";return}
 if(!x||p!=="1234"||x.role!==r){$("err").textContent="Invalid credentials or role.";return}
 cur=x;$("loginPage").classList.add("hidden");$("app").classList.remove("hidden");
 $("who").textContent=x.name+" ("+x.role.toUpperCase()+")";
 $("menu").innerHTML=menus[x.role].map(m=>`<a onclick="show('${m}',this)">${m}</a>`).join("");
 show("Dashboard",$("menu").firstChild);
}
function logout(){cur=null;$("app").classList.add("hidden");$("loginPage").classList.remove("hidden");$("pass").value="";$("err").textContent=""}
function show(p,el){
 document.querySelectorAll("nav a").forEach(a=>a.classList.remove("active"));el.classList.add("active");
 $("content").innerHTML=pages[p]?pages[p]():"<h2>"+p+"</h2>";
}
function noticeList(){return db.notices.map(n=>`<div class="notice"><b>${n.t}</b> <small>${n.d}</small><br>${n.b}</div>`).join("")}
function stat(a,b){return `<div class="stat"><b>${a}</b>${b}</div>`}
function attRows(){const a=db.att.S01;return Object.keys(a).map(c=>{const pc=Math.round(a[c].p/a[c].t*100);return [c,a[c].p,a[c].t,`<span class="${pc<75?"low":"ok"}">${pc}%</span>`]})}
function addNotice(){const t=$("nt").value.trim(),b=$("nb").value.trim();if(!t||!b){alert("Title and content are required.");return}
 db.notices.unshift({t,b,d:new Date().toLocaleDateString("en-GB")});show("Notices",document.querySelector("nav a.active"))}
function noticePage(){const can=cur.role!=="student";return `<h2>Notices</h2>${can?`<div class="form"><label>Title</label><input id="nt"><label>Content</label><textarea id="nb" rows="3"></textarea><button onclick="addNotice()">Publish Notice</button></div>`:""}${noticeList()}`}
function addStudent(){const n=$("sn").value.trim(),r=$("sr").value.trim();if(!n||!r){alert("All fields are required.");return}
 db.students.push({id:"S0"+(db.students.length+1),name:n,reg:r,sem:7});show("Manage Students",document.querySelector("nav a.active"))}
function addCourse(){const c=$("cc").value.trim(),n=$("cn").value.trim();if(!c||!n){alert("All fields are required.");return}
 db.courses.push({code:c,name:n,fac:"Unassigned",cr:3});show("Manage Courses",document.querySelector("nav a.active"))}
function saveAtt(){const rows=document.querySelectorAll(".chk");let p=0;rows.forEach(r=>{if(r.checked)p++});alert("Attendance saved: "+p+" present, "+(rows.length-p)+" absent.")}
function saveMarks(){const v=[...document.querySelectorAll(".mk")].map(i=>+i.value);if(v.some(x=>isNaN(x)||x<0||x>100)){alert("Marks must be between 0 and 100.");return}alert("Marks saved successfully.")}
const studentTable=()=>table(["ID","Name","Reg. No","Semester"],db.students.map(s=>[s.id,s.name,s.reg,s.sem]));
const pages={
 Dashboard(){const r=cur.role;
  if(r==="student")return `<h2>Welcome, ${cur.name}</h2><div class="stats">${stat(3,"Courses")}${stat("81%","Avg. Attendance")}${stat("74","Avg. Marks")}</div><h3>Latest Notices</h3>${noticeList()}`;
  return `<h2>Welcome, ${cur.name}</h2><div class="stats">${stat(db.students.length,"Students")}${stat(db.courses.length,"Courses")}${stat(db.notices.length,"Notices")}</div><h3>Latest Notices</h3>${noticeList()}`},
 Profile(){const s=db.students[0];return `<h2>My Profile</h2>${table(["Field","Value"],[["Name",s.name],["Reg. No",s.reg],["Programme","B.Tech CSE"],["Semester","7th"],["Section","Gr-06"]])}`},
 Courses(){return `<h2>Courses</h2>${table(["Code","Course","Faculty","Credits"],db.courses.map(c=>[c.code,c.name,c.fac,c.cr]))}`},
 Attendance(){return `<h2>My Attendance</h2>${table(["Course","Present","Total","Percentage"],attRows())}<p>Minimum required attendance: 75%</p>`},
 Timetable(){return `<h2>Timetable</h2>${table(["Day","9-10","10-11","11-12","2-3"],db.tt)}`},
 Results(){return `<h2>My Results</h2>${table(["Course","Marks","Grade"],db.marks.map(m=>[m.code,m.m,grade(m.m)]))}`},
 Notices:noticePage,
 "Mark Attendance"(){return `<h2>Mark Attendance - CS435</h2>${table(["Student","Present"],db.students.map(s=>[s.name,`<input type="checkbox" class="chk" checked>`]))}<button onclick="saveAtt()">Save Attendance</button>`},
 "Enter Marks"(){return `<h2>Enter Marks - CS435</h2>${table(["Student","Marks (0-100)"],db.students.map(s=>[s.name,`<input type="number" class="mk" value="0" style="width:90px">`]))}<button onclick="saveMarks()">Save Marks</button>`},
 Students(){return `<h2>Students</h2>${studentTable()}`},
 "Manage Students"(){return `<h2>Manage Students</h2><div class="form"><label>Name</label><input id="sn"><label>Registration No.</label><input id="sr"><button onclick="addStudent()">Add Student</button></div>${studentTable()}`},
 "Manage Courses"(){return `<h2>Manage Courses</h2><div class="form"><label>Course Code</label><input id="cc"><label>Course Name</label><input id="cn"><button onclick="addCourse()">Add Course</button></div>${table(["Code","Course","Faculty","Credits"],db.courses.map(c=>[c.code,c.name,c.fac,c.cr]))}`},
 Reports(){return `<h2>Reports</h2><h3>Attendance Summary (Student S01)</h3>${table(["Course","Present","Total","Percentage"],attRows())}<h3>Performance Summary</h3>${table(["Course","Marks","Grade"],db.marks.map(m=>[m.code,m.m,grade(m.m)]))}`}
};
