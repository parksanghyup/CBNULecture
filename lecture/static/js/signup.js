function getDepartment(text) {

    let data = {
        '인문대학':['국어국문학과','중어중문학과','영어영문학과','독일언어문화학과',
        '프랑스언어문화학과','러시아언어문화학과','철학과','사학과','고고미술사학과'
    ],
        '사회과학대학':['사회학과','심리학과','행정학과','정치외교학과','경제학과'],
        '자연과학대학':['수학정보통계학부','물리학과','화학과','생명과학부','천문우주학과'],
        '경영대학':['경영학부','국제경영학과','경영정보학과'],
        '공과대학':['토목공학부','기계공학부','화학공학과','신소재공학과','건축공학과','안전공학과',
    '환경공학과','공업화학과','도시공학과','건축학과','테크노산업공학과'],
        '전자정보대학':['전기공학부','전자공학부','정보통신공학부','컴퓨터공학과','소프트웨어학과'],
        '농업생명환경대학':['식물자원환경화학부','식품생명축산과학부','응용생명공학부',
    '산림학과','지역건설공학과','바이오시스템공학과','목재종이과학과','농업경제학과'],
        '사범대학':['교육학과','국어교육과','영어교육과','역사교육과','지리교육과','사회교육과','윤리교육과',
    '물리교육과','화학교육과','생물교육과','지구과학교육과','수학교육과','체육교육과'],
        '생활과학대학':['식품영양학과','아동복지학과','의류학과','주거환경학과','소비자학과'],
        '수의과학대학':['수의예과','수의학과'],
        '약학대학':['약학과','제약학과'],
        '의과대학':['의예과','의학과','간호학과'],
    }

    return data[text];
}



$(document).on('change','select[name=college]', function(e){
    let target = $('#id_college option:checked').text();

    let department = getDepartment(target);
    let text = Array();
    for(let i=0;i<department.length;i++) {
        text.push('<option>'+department[i]+'</option>')
    }

    $('#id_department').html(text);
});