package com.example.demo.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @Autowired
    private BookService bs;
    
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, value = "/book/add")
    public void add(@RequestBody Book book) {
        bs.add(book);
    }
    
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping("/book/{name}")
    public Book get(@PathVariable String name) {
        return bs.findByName(name);
    }
    
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping("/Allbook")
    public List<Book> get(){
        return bs.getAll();
    }
    
    @CrossOrigin(origins="http://localhost:3000")
    @RequestMapping(method = RequestMethod.DELETE, value = "/book/{id}")
    public void delete(@PathVariable long id) {
        bs.delete(id);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.PUT, value = "/updateBook")
    public void update(@RequestBody Book b) {
        bs.update(b);
    }
}