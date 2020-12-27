import com.company.Config;
import com.company.Warrior;
import com.company.WarriorController;
import com.company.WarriorRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


public class WarriorControllerTest extends AbstractTest {

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }
    @Test
    public void getWarriorsList() throws Exception {
        String uri = "/warriors";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Warrior[] warriorsList = super.mapFromJson(content, Warrior[].class);
        assertTrue(warriorsList.length > 0);
    }

//    @Test
//    public void createWarrior() throws Exception {
//        String uri = "/warriors";
//        Warrior warrior = new Warrior();
//        warrior.setId("3");
//        warrior.setName("First");
//        warrior.setFile("asdfgh");
//        String inputJson = super.mapToJson(warrior);
//        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
//                .contentType(MediaType.APPLICATION_JSON_VALUE)
//                .content(inputJson)).andReturn();
//
//        int status = mvcResult.getResponse().getStatus();
//        assertEquals(201, status);
//        String content = mvcResult.getResponse().getContentAsString();
//        assertEquals(content, content);
//    }

//    @Test
//    public void updateProduct() throws Exception {
//        String uri = "/products/2";
//        Product product = new Product();
//        product.setName("Lemon");
//        String inputJson = super.mapToJson(product);
//        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
//                .contentType(MediaType.APPLICATION_JSON_VALUE)
//                .content(inputJson)).andReturn();
//
//        int status = mvcResult.getResponse().getStatus();
//        assertEquals(200, status);
//        String content = mvcResult.getResponse().getContentAsString();
//        assertEquals(content, "Product is updated successsfully");
//    }

    @Test
    public void deleteWarrior() throws Exception {
        String uri = "/warriors/2";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, "Warrior was deleted");
    }
}