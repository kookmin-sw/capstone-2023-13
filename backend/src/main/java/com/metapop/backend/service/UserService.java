package com.metapop.backend.service;

import com.metapop.backend.dto.UserDTO.FindPWDTO;
import com.metapop.backend.dto.UserDTO.MailDTO;
import com.metapop.backend.dto.UserDTO.UserUpdateDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final JavaMailSender mailSender;

    public void join(User user) {
        userRepository.save(user);

        String password = user.getPassword();

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        user.setPassword(encodedPassword);
    }

    public boolean isEmailDuplicate(String email) {
        User findUser = userRepository.findByEmail(email);
        return findUser != null;
    }

    public User findByEmail(String email) {
        User findUser = userRepository.findByEmail(email);
        return findUser;
    }

    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

    public boolean comparePassword(String email,String password) {
        User findUser = userRepository.findByEmail(email);

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean isMatched = passwordEncoder.matches(password, findUser.getPassword());

        if(isMatched) {
            return true;
        }
        else{
            return false;
        }
    }

    public User updateUserInfo(Long id, UserUpdateDTO userUpdateDTO) {
        User user = userRepository.findById(id).orElseThrow();
        user.update(userUpdateDTO);
        return user;
    }

    public boolean findPassword(FindPWDTO findPWDTO) {
        User user = userRepository.findByEmail(findPWDTO.getEmail());
        if(user.getName().equals(findPWDTO.getName())) {
            return true;
        }
        else{
            return false;
        }
    }

    // 메일 내용을 생성하고 임시 비밀번호로 회원 비밀번호를 변경
    public MailDTO createMailAndChangePassword(String userEmail) {
        String tempPassword = getTempPassword();
        MailDTO mailDTO = new MailDTO();
        mailDTO.setAddress(userEmail);
        mailDTO.setTitle("Meta-Pop 임시비밀번호 안내 이메일 입니다.");
        mailDTO.setMessage("안녕하세요. Meta-Pop 임시비밀번호 안내 관련 이메일 입니다." + " 회원님의 임시 비밀번호는 "
                + tempPassword + " 입니다." + "로그인 후에 비밀번호를 변경을 해주세요");
        updatePassword(tempPassword,userEmail);
        return mailDTO;
    }

    //임시 비밀번호로 업데이트
    public void updatePassword(String str, String userEmail){
        User user = userRepository.findByEmail(userEmail);
        user.updatePw(str);
    }

    //랜덤함수로 임시비밀번호 구문 만들기
    public String getTempPassword(){
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String str = "";

        // 문자 배열 길이의 값을 랜덤으로 10개를 뽑아 구문을 작성함
        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
    }

    // 메일보내기
    public void mailSend(MailDTO mailDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDTO.getAddress());
        message.setSubject(mailDTO.getTitle());
        message.setText(mailDTO.getMessage());
        message.setFrom("metapop13@gmail.com");
        message.setReplyTo("metapop13@gmail.com");
        mailSender.send(message);
    }
}