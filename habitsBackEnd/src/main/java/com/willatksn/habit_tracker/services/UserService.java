import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(Long id, String name, String email) {
        User user = new User(id, name, email);
        userRepository.save(user);  // Save the user to the database
    }
}