
import com.company.Duel;
import com.company.Warrior;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.*;


public class WarriorControllerTest extends AbstractTest {
    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    @Before
    public void setUp(){
        super.setUp();
        mongoTemplate.dropCollection(Warrior.class);
        Warrior w1 = new Warrior();
        w1.setId("1");
        w1.setName("First");
        w1.setFile("asd");
        mongoTemplate.insert(w1);
        Warrior w2 = new Warrior();
        w2.setId("2");
        w2.setName("Second");
        w2.setFile("asd");
        mongoTemplate.insert(w2);
        mongoTemplate.dropCollection(Duel.class);
        Duel d = new Duel(w1, w2);
        mongoTemplate.insert(d);
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
    public void getWarrior() throws Exception{
        String uri = "/warriors/1";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Warrior w = super.mapFromJson(content, Warrior.class);
        String w1 = super.mapToJson(w);
        assertEquals(content, w1);
    }

    @Test
    public void createWarrior() throws Exception {
        String uri = "/warriors";
        Warrior warrior = new Warrior();
        warrior.setId("3");
        warrior.setName("Third");
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
        String uri = "/warriors/1";
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
        String uri = "/warriors/1";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.delete(uri)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, "Warrior was deleted");
    }

    @Test
    public void getBattle() throws Exception{
        String uri = "/warriors/First/Second";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String content = mvcResult.getResponse().getContentAsString();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        Duel[] duelsList = super.mapFromJson(content, Duel[].class);
        assertEquals(2, duelsList.length);
    }

    @Test
    public void getDuelsList() throws Exception{
        String uri = "/warriors/duels";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Duel[] duelsList = super.mapFromJson(content, Duel[].class);
        assertEquals(1, duelsList.length);
    }
}