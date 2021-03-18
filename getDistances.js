/* 
BI 102	A	BIOSTATISTICS	3	M-W-F 1000-1100	TBA
*/
var aisisData = `CSCI 231	A	ADVANCED MULTIMEDIA SYSTEMS	3	M-W-F 1600-1700	CTC 112	AMANTE, Francesco	10	ENG	G	9	-	S	P
CSCI 234.1	A	SEMINAR:MULTIMEDIA APPLICATIONS	3	M-W-F 1500-1600	CTC 112	AMANTE, Francesco	10	ENG	G	10	-	N	N
CSCI 235	A	SPECIAL TOPICS: GAME AND GAMES DESIGN	3	M 1800-2100	CTC 112	CASANO, JONATHAN DL.	20	ENG	G	18	-	S	P
CSCI 243	A	AFFECTIVE COMPUTING	3	W 1700-2000	COLLEGE '66 CO-LAB	RODRIGO, MA. MERCEDES T.	20	ENG	G	2	-	S	P
CSCI 261.03	A	INTRODUCTION TO SOCIAL COMPUTING	3	SAT 0900-1200	CTC 214	MONTALAN, JANN RAILEY E.	30	ENG	G	27	`;
var aisisRows = aisisData.split(/\n/g);
var aisisDetailsFromRows = [];
var aisisDetailsAsObjects = [];

for (var i = 0; i < aisisRows.length; i++) { 
    var arrayFromRow = aisisRows[i].split(/\t{1,}/g);
    aisisDetailsFromRows.push(arrayFromRow);
}

for (var j = 0; j < aisisDetailsFromRows.length; j++) { 
    var aisisDetails = { 
        subjectCode: aisisDetailsFromRows[j][0],
        section: aisisDetailsFromRows[j][1],
        subjectName: aisisDetailsFromRows[j][2],
        days: aisisDetailsFromRows[j][4].split(" ")[0].split("-"),
        time: aisisDetailsFromRows[j][4].split(" ")[1].split("-"),
        location: aisisDetailsFromRows[j][5]
    }
    aisisDetailsAsObjects.push(aisisDetails);
}

function sortByDays(array) { 
    const daysOfWeek = ["M", "T", "W", "TH", "F", "SAT"];
    for (var day of daysOfWeek) { 
        var arrayByDay = array.filter(function(element) { 
            return element.days.includes(day);
        });
        arrayByDay.sort((subj1, subj2) => subj1.time[0] > subj2.time[0] ? 1 : -1);
        for (var i = 0; i < arrayByDay.length - 1; i++) { 
            arrayByDay[i]["distance"] = distances(arrayByDay[i].location, arrayByDay[i + 1].location);
        }
        arrayByDay.unshift(day);
        console.log(arrayByDay);
    }
}

function distances(building1, building2) { 
    //call json file here
    return 0
}

//console.log(aisisDetailsAsObjects);
sortByDays(aisisDetailsAsObjects);