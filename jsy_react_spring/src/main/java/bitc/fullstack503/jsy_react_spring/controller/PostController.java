package bitc.fullstack503.jsy_react_spring.controller;


import bitc.fullstack503.jsy_react_spring.dto.postDTO;
import bitc.fullstack503.jsy_react_spring.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin({"http://localhost:5173","http://localhost:5173/write"})
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<postDTO> getAll() throws Exception{
        return postService.findAll();
    }

    @GetMapping("/{postIdx}")
    public postDTO getOne(@PathVariable int postIdx) throws Exception{
        return postService.findById(postIdx);
    }

    @PostMapping
    public void create(@RequestBody postDTO post) throws Exception{
        postService.save(post);
    }

    @DeleteMapping("/{postIdx}/delete")
    public void delete(@PathVariable int postIdx) throws Exception{
        postService.deleteById(postIdx);
    }

    @PutMapping("/{postIdx}/update")
    public void update(@RequestBody postDTO post) throws Exception{
        System.out.println(post);
        postService.update(post);
    }

}