package com.casestudy.authentication.controller;

import com.casestudy.authentication.model.User;
import com.casestudy.authentication.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/")
@Slf4j
public class MainController {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    User databaseUser=new User();

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initAdminUser();
    }

    @RequestMapping(value = "register", method=RequestMethod.POST)
    public ResponseEntity<User> register(@RequestBody User user) throws Exception {
        if(userService.isUserPresent(user)) {
            throw new Exception("User already registered");
        }

        return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
    }

    @RequestMapping(value = "login", method=RequestMethod.POST)
    public User LoginUser(@RequestBody User user, HttpServletResponse response) throws Exception{
        // login code logic

        String loginemail =user.getEmail();
        String loginpassword=user.getPassword();
//        String encode=passwordEncoder.encode(loginpassword);
//        System.out.println("Encoded password "+encode);
//        System.out.println("Database password: "+databaseUser.getPassword());

        User userObj=null;
        if(loginemail !=null && loginpassword!=null) {
//            if(passwordEncoder.matches(loginpassword,databaseUser.getPassword())) {
//                log.info("Password typed: "+loginpassword);
//                log.info("Database Password: "+databaseUser.getPassword());
                userObj = userService.fetchUserByEmailAndPassword(loginemail, loginpassword);
//            }
        }
        if(userObj==null) {
            throw new Exception("Bad Credentials!!");
        }

        return userObj;
    }


}
