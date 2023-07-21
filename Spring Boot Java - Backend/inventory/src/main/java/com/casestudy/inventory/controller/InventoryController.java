package com.casestudy.inventory.controller;

import com.casestudy.inventory.SequenceGeneratorService;
import com.casestudy.inventory.model.Inventory;
import com.casestudy.inventory.model.ResetInventory;
import com.casestudy.inventory.service.InventoryService;
import com.casestudy.inventory.service.ResetInvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InventoryController {
//    URLS:-
//    http://localhost:8081/save
//    http://localhost:8081/inventories
//    http://localhost:8081/inventories/1
//    http://localhost:8081/delete/1
//    http://localhost:8081/update/2
//    http://localhost:8081/search/22/D51
    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private ResetInvService resetInvService;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;


    @PostMapping("/save")
    public ResponseEntity<Inventory> saveInventory(@RequestBody Inventory inventory) throws Exception{
        int locationNbr=inventory.getLocationNbr();
        String materialId= inventory.getMaterialId();

        Inventory inve=resetInvService.isInventoryPresent(locationNbr,materialId);
        if (inve!=null){
            throw new Exception("Inventory with same Location No & Material Id already added");
        }

        else {
            inventory.setId((int) sequenceGeneratorService.generateSequence(Inventory.SEQUENCE_NAME));
            return  new ResponseEntity<>(inventoryService.save(inventory), HttpStatus.CREATED);
        }
    }

    @GetMapping("/inventories")
    public ResponseEntity<List<Inventory>> saveInventory(){
        return  new ResponseEntity<>(inventoryService.getInventories(), HttpStatus.OK);
    }

    @GetMapping("/inventories/{id}")
    public ResponseEntity<Inventory> getInventoryById(@PathVariable int id){
        return  new ResponseEntity<>(inventoryService.getInventoryById(id), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Inventory> updateInventory(@RequestBody Inventory inventory,@PathVariable int id) throws Exception {
        Inventory in=resetInvService.isInventoryPresent(inventory.getLocationNbr(),inventory.getMaterialId());
        if(in==null){
            throw new Exception("Error !");
        }
        else{
            inventoryService.delete(id);
//            Inventory inv=new Inventory();
//            inventory.setOrderQty(inventory.getOrderQty()+inv.getOrderQty());
            return new ResponseEntity<>(inventoryService.save(inventory), HttpStatus.ACCEPTED);
        }
    }

    @DeleteMapping("delete/{id}")
    public void deleteInventory(@PathVariable int id){
        inventoryService.delete(id);
    }

    @GetMapping("/search/{locationNbr}/{materialId}")
    public Inventory findByLocationAndMaterial(@PathVariable int locationNbr, @PathVariable String materialId) throws Exception{
        Inventory inventoryObj=resetInvService.isInventoryPresent(locationNbr, materialId);

        if(inventoryObj==null){
            throw new Exception("Invalid Location No or Material Id");
        }
        else return inventoryObj;

    }

    @GetMapping("/search/{locationNbr}")
    public List<Inventory> findByLocationNbr(@PathVariable int locationNbr) throws Exception{
        List<Inventory> inventories=inventoryService.findByLocationNbr(locationNbr);

        if(inventories.isEmpty()){
            throw new Exception("Invalid Location No");
        }
        else return inventories;

    }

    //changed
    @PostMapping("/orderupdate")
    public Inventory updateInventoryAfterOrder(@RequestBody Inventory inventory)
    {

        return inventoryService.updateInventoryAferOrder(inventory);
    }




}
