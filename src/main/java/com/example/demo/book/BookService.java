package com.example.demo.book;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    
    @Autowired
    private BookRepository br;

    public void add(Book book) {
        br.save(book);
    }
    
    public Book findByName(String name) {
        return br.findOneBookByName(name);
    }
    
    public void delete(long id) {
        br.deleteById(id);
    }
    
    public void update(Book book) {
        br.save(book);
    }
    
    public List<Book> getAll(){
        List<Book> listBooks = new ArrayList<Book>();
        br.findAll().forEach(listBooks :: add);
        return listBooks;
    }
}