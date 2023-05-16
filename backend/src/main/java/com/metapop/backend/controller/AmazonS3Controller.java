package com.metapop.backend.controller;

import com.metapop.backend.service.AwsS3Service;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Tag(name = "AWS S3", description = "AWS S3 이미지 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
@CrossOrigin(origins = "*")
public class AmazonS3Controller {

    private final AwsS3Service awsS3Service;

    @Operation(summary = "", description = "이미지 등록 API")
    @PostMapping("/uploadFile")
    public ResponseEntity<List<String>> uploadFile(List<MultipartFile> multipartFiles){
        return ResponseEntity.ok(awsS3Service.uploadFile(multipartFiles));
    }

    @Operation(summary = "", description = "이미지 삭제 API")
    @DeleteMapping("/deleteFile")
    public ResponseEntity<String> deleteFile(@RequestParam String fileName){
        awsS3Service.deleteFile(fileName);
        return ResponseEntity.ok(fileName);
    }
}