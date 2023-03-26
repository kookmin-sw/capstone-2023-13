package com.metapop.backend.controller;

import com.metapop.backend.dto.ProductSaveDTO;
import com.metapop.backend.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Tag(name = "product", description = "상품 API")
@RestController
@RequestMapping("products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Operation(summary = "", description = "상점 등록 API")
    @PostMapping("/register")
    public String registration(@RequestBody ProductSaveDTO productSaveDTO) {
        return productService.registration(productSaveDTO);
    }
}
