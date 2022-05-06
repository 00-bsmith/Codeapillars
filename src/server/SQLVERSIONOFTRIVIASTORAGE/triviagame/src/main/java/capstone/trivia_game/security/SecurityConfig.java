//package capstone.trivia_game.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
//
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private final JwtConverter converter;
//
//    public SecurityConfig(JwtConverter converter) {
//        this.converter = converter;
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//
//        http.cors();
//
//        http.authorizeRequests()
//                // add antMatchers here to configure access to specific API endpoints
//                .antMatchers("/authenticate").permitAll()
//                .antMatchers("/create_account").permitAll()
//                .antMatchers("/refresh_token").authenticated()
//                .antMatchers(HttpMethod.GET,
//                        "/api/score/{length}", "/api/score/{length}/*").permitAll()
//                .antMatchers(HttpMethod.POST,
//                        "/api/score/{length}").permitAll()
//                .antMatchers(HttpMethod.PUT,
//                        "/api/score/{length}/{scoreId}").permitAll()
//                .antMatchers(HttpMethod.DELETE,
//                        "/api/score/{length}/{scoreId}").hasAnyRole("USER", "ADMIN")
//                .antMatchers("/**").permitAll()
//                // require authentication for any request...
//                .anyRequest().authenticated()
//                .and()
//                .addFilter(new JwtRequestFilter(authenticationManager(), converter))
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//    }
//
//    @Override
//    @Bean
//    protected AuthenticationManager authenticationManager() throws Exception {
//        return super.authenticationManager();
//    }
//
//    @Bean
//    public PasswordEncoder getEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
////    @Bean(name = "mvcHandlerMappingIntrospector")
////    public HandlerMappingIntrospector mvcHandlerMappingIntrospector() {
////        return new HandlerMappingIntrospector();
////    }
//}
