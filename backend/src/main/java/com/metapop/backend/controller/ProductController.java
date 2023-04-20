package com.metapop.backend.controller;

import com.metapop.backend.dto.ProductDTO.ProductSaveDTO;
import com.metapop.backend.dto.ProductDTO.ProductUpdateDTO;
import com.metapop.backend.entity.Product;
import com.metapop.backend.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "product", description = "상품 API")
@RestController
@RequestMapping("products")
@CrossOrigin(origins = "http://43.201.210.173")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Operation(summary = "", description = "상품 등록 API")
    @PostMapping("/register")
    public String registration(@RequestBody ProductSaveDTO productSaveDTO) {
        return productService.registration(productSaveDTO);
    }

    @Operation(summary = "", description = "상품 전체 정보 조회 API")
    @GetMapping("/info/{store_id}")
    public List<Product> info(@PathVariable Long store_id) {
        return productService.info(store_id);
    }

    @Operation(summary = "", description = "상품 상세 정보 조회 API")
    @GetMapping("/info/detail/{product_id}")
    public Optional<Product> infodetail(@PathVariable Long product_id) {
        return productService.infodetail(product_id);
    }

    @Operation(summary = "", description = "상품 정보 수정 API")
    @PutMapping("/update/{product_id}")
    public Product update(@PathVariable Long product_id, @RequestBody ProductUpdateDTO productUpdateDTO) {
        return productService.update(product_id, productUpdateDTO);
    }

    @Operation(summary = "", description = "상품 삭제 API")
    @DeleteMapping("/remove/{product_id}")
    public String remove(@PathVariable Long product_id) {
        return productService.delete(product_id);
    }
}
