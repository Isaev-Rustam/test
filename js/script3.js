
Другая ключевая концепция классов — полиморфизм — описывает
концепцию того, что общее поведение родительского класса может
переопределяться в дочернем классе для определения более конкретной реализации. Относительный полиморфизм позволяет
обращаться кбазовому поведению из переопределенного поведения.
  Из теории классов следует, что родительский и дочерний классы
используют одно имя метода для некоторого аспекта поведения,
  так что дочерний класс переопределяет родителя (выборочно).
  Как вы вскоре увидите, в коде JavaScript это с большой вероятностью приводит к неприятностям и снижает надежность кода.



Полиморфизм — намного более обширная тема, чтобы рассматривать ее здесь, но текущая «относительная» семантика указывает
Наследование 229
на один конкретный аспект: идею о том, что любой метод может
обратиться к другому методу (с тем же или другим именем) на
более высоком уровне иерархии наследования






















