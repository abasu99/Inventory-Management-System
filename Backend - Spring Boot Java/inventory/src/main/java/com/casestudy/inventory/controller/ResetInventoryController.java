package com.casestudy.inventory.controller;

import com.casestudy.inventory.SequenceGeneratorService;
import com.casestudy.inventory.model.Inventory;
import com.casestudy.inventory.model.ResetInventory;
import com.casestudy.inventory.service.ResetInvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ResetInventoryController {

    @Autowired
    private ResetInvService resetInvService;

    Inventory inv=new Inventory();

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @PostMapping("/save-reset-qty")
    public ResponseEntity<ResetInventory> saveInventory(@RequestBody ResetInventory resetInventory) throws Exception{
//        resetInventory.setId((int) sequenceGeneratorService.generateSequence(Inventory.SEQUENCE_NAME));
//        resetInventory.setId(inv.getId());
        return  new ResponseEntity<>(resetInvService.save(resetInventory), HttpStatus.CREATED);

    }

    @PutMapping("/update-reset-qty/{id}")
    public ResponseEntity<ResetInventory> updateInventory(@RequestBody ResetInventory resetInventory,
                                                     @PathVariable int id)  {

        deleteResetInv(id);
        return new ResponseEntity<>(resetInvService.save(resetInventory), HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/delete-reset-qty/{id}")
    public void deleteResetInv(@PathVariable int id){
        resetInvService.deleteResetInv(id);
    }


}
