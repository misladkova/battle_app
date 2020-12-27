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

    @Test
    public void createWarrior() throws Exception {
        String uri = "/warriors";
        Warrior warrior = new Warrior();
        warrior.setId("2");
        warrior.setName("First");
        warrior.setFile("asdfgh");
        String inputJson = super.mapToJson(warrior);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, inputJson);
    }

    @Test
    public void updateWarrior() throws Exception {
        String uri = "/warriors/2";
        MvcResult mvcResult1 = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
        String w = mvcResult1.getResponse().getContentAsString();
        Warrior inputJson = mapFromJson(w, Warrior.class);
        inputJson.setName("Qwert");
        String inputJson1 = super.mapToJson(inputJson);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.patch(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson1)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, inputJson1);
    }

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