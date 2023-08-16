package org.feedback.config;


import org.feedback.model.Role;
//import org.feedback..UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/user/**").hasRole(Role.ADMIN.name())
                .antMatchers("/user/**").hasRole(Role.USER.name())
                .antMatchers("/login").permitAll()  // permit login and registration for all
                .anyRequest().authenticated()  // all other requests need to be authenticated
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll();
    }
}