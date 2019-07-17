package com.wildcircus.back.controllers;

import com.wildcircus.back.entities.Picture;
import com.wildcircus.back.repositories.PictureDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PictureController {

    @Autowired
    private PictureDAO dao;

    @GetMapping(value = "/picture")
    public List<Picture> getAll() {
        return dao.findAll();
    }

    @Secured({"SUPER_ADMIN"})
    @PostMapping(value = "/picture")
    public Picture create(@RequestBody Picture p_picture) throws Exception{
        return dao.save(p_picture);
    }

    @Secured({"SUPER_ADMIN"})
    @DeleteMapping(value = "/picture/{id}")
    public boolean delete(@PathVariable("id") Long p_id) throws Exception{
        dao.deleteById(p_id);
        return true;
    }
}
