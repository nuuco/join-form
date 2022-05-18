//아이디 유효성 검사
//미입력 시 : 필수 정보입니다.
//유효성 검사 실패 : 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
//유효성 검사 통과 : 멋진 아이디네요!
//중복 아이디 : 이미 사용중이거나 탈퇴한 아이디입니다.
const elInputUserName = document.querySelector('#username');  
const elIdMsg_essential = document.querySelector('.id_msg.essential_msg');  //미입력 시 메시지
const elIdMsg_failure = document.querySelector('.id_msg.failure_msg');  //유효성 검사 실패
const elIdMsg_success = document.querySelector('.id_msg.success_msg');  //유효성 검사 통과
const elIdMsg_duplicate = document.querySelector('.id_msg.duplicate_msg');  //중복 아이디 메시지


elInputUserName.addEventListener("blur", function( event ) {
    
    
  });

elInputUserName.blur = function() {
    if(elInputUserName.value === ''){
        elIdMsg_essential.classList.remove('hide');
    }else{
        elIdMsg_essential.classList.add('hide');
    }
}


