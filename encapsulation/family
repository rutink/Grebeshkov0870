<?
/* здоровье не может быть более 100 ед.*/ 
  class Person{
//родословная   
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name,$lastname,$age, $mother=null, $father=null){
      $this->name = $name;
      $this->lastname = $lastname;
      $this->age = $age;
      
      $this->mother=$mother;
      $this->father=$father;
      
      $this->grandmothermom=$grandMotherMom;
      
      $this->hp = 100;
    }
    function sayHi($name){
      return "Hi $name, my name is ".$this->name;
    }
    function setHp($hp){
      if ($this->hp+$hp>=100) $this->hp=100;
      else $this->hp = $this->hp+$hp;
    }
//инкапсуляция
    function getHp(){return $this->hp;}
    function getName(){return $this->name;}
    
    function getMother(){return $this->mother;}
    function getFather(){return $this->father;}
    
    function getInfo(){
      return "
      My name is: ".$this->getName()."<br>
      My mother is: ".$this->getMother()->getName()."<br>
      My father is: ".$this->getFather()->getName()."<br>
      My mom's granny is: ".$this->getMother()->getMother()->getName()."<br>
      My mom's grandfather is: ".$this->getMother()->getFather()->getName()."<br>
      My dad's granny is: ".$this->getFather()->getMother()->getName()."<br>
      My mom's grandfather is: ".$this->getFather()->getFather()->getName()."<br>
      ";
    }
  }
  
  $medkit = 50; //AID
  $sveta = new Person ("Svetlana", "Petrova", 67); //мама Ольги, бабка по материнской
  $igor = new Person("Igor", "Petrov", 68);//папа Ольги, дед по материнской
  
  $irina = new Person ("Irina", "Visina", 65);//мама Алекса, бабка по материнской
  $sergei = new Person ("Sergei", "Visin", 69);//папа Алекса, дед по материнской
  
  $alex = new Person("Alex", "Ivanov", 42, $irina, $sergei);//папа
  $olga = new Person("Olga", "Ivanova", 42, $sveta, $igor);//мама
  
  $valera = new Person("Valera", "Ivanov", 17, $olga, $alex);//главгерой
  echo $valera->getInfo();//вывод инкапсуляции
?>
