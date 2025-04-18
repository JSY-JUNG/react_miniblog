package bitc.fullstack503.jsy_react_spring.controller;


import bitc.fullstack503.jsy_react_spring.dto.commentDTO;
import bitc.fullstack503.jsy_react_spring.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts/{postIdx}/comments")
@CrossOrigin({"http://localhost:5173","http://localhost:5173/api/posts/{postIdx}/comments"})
public class CommentController {
    @Autowired
    private CommentMapper commentMapper;


    @GetMapping
    public List<commentDTO> getComments(@PathVariable int postIdx) throws Exception {
        return commentMapper.findByPostId(postIdx);
    }


    @PostMapping
    public void addComment(@PathVariable int postIdx, @RequestBody Map<String, String> body) throws Exception {
        String text = body.get("text");
        commentDTO comment = new commentDTO();
        comment.setPostId(postIdx);
        comment.setText(text);
        commentMapper.savecomment(comment);
    }
}
